<template>
  <div>
    <b-form @submit="checkForm" novalidate="novalidate" method="post">
      <b-input-group prepend="+7" :state="state">
        <b-form-input name="telephone" type="number" v-model="phone" :state="state" placeholder="10 цифр номера телефона"></b-form-input>
        <b-form-input name="address" type="text" v-model="address" placeholder="Адрес доставки"></b-form-input>
      </b-input-group>
      <br>
      <b-button variant="primary" @click="findcart">Применить скидку</b-button>
      <b-button @click="checkForm" variant="success">Заказать</b-button>
    </b-form>
    <br>
    <b-table striped bordered  hover :items="items" :fields="fields"></b-table>
    <br>
    <p>Итого {{totSum.toFixed(2)}}</p>
    <p>Скидка {{totDisk.toFixed(2)}}</p>
    <p>К Оплате {{totPay.toFixed(2)}}</p>
  </div>
</template>

<script>
const api_find_card_byphone = require('../assets/const.js').api_cards_byphone
const api_write_order = require('../assets/const.js').api_write_order

export default {
  data: function() {
    return {
      errors: [],
      barcode: '',
      phone: '',
      address:'',
      name: '',
      novalidate: true,
      cardPercent: 0,
      totSum: 0,
      totDisk: 0,
      totPay: 0,
      fields: [
        { key: 'name', label: 'Наименование' },
        { key: 'qty', label: 'К-во' },
        { key: 'price', label: 'Цена' },
        { key: 'sum', label: 'Сумма' },
        { key: 'percent', label: '% ' },
        { key: 'diskount', label: 'Скидка' },
        { key: 'topay', label: 'К оплате' }
      ]
    }
  },
  computed: {
    state() {
      return this.validnumber(this.phone)
    },
    items() {
      return this.getCartItemsJSON(this.cardPercent)
    }
  },
  methods: {
    findcart: async function() {
      if (this.validnumber()) {
        const res = await this.$axios.post(api_find_card_byphone, {
          telephone: '7' + this.phone
        })
        //this.phone = res.data.tel;
        if (res.data.hasOwnProperty('name')) {
          this.name = res.data.name
          this.cardPercent = 3
          console.log(res.data)
        } else {
          console.log('Не найдена карта по телефону')
        }
      } else {
        alert('Не верный номер !')
      }
    },
    checkForm: function(e) {
      this.errors = []
      if (!this.validnumber()) {
        this.errors.push('Не верно указан номер телефона!')
      }
      if (this.errors.length) {
        return false
      }

      this.$axios
        .post(api_write_order, {
          telephone: '7' + this.phone,
          address: this.address,
          barcode: this.barcode,
          items: this.items
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    validnumber: function() {
      var re = /^\d{10}$/
      return re.test(this.phone)
    },
    getCartItemsJSON: function(card_percent) {
      this.totSum = 0
      this.totDisk = 0
      this.totPay = 0
      var items = []
      for (var key in this.$store.state.glcarts) {
        var it = this.$store.state.glcarts[key]
        var mSum = Number(it[2]) * Number(it[1])
        var mDiskGroup = it[4]
        var mDiskount = 0
        var mToPay = mSum
        if (card_percent > 0) {
          mDiskount = Math.round((mSum / 100) * card_percent * 100) / 100
          mToPay = mSum - mDiskount
        }
        items.push({
          код: it[3],
          ценоваягруппа: mDiskGroup,
          name: it[0],
          price: it[1],
          qty: it[2],
          sum: mSum.toFixed(2),
          percent: card_percent == 0 ? '' : card_percent,
          diskount: mDiskount == 0 ? '' : mDiskount.toFixed(2),
          topay: mToPay.toFixed(2)
        })

        this.totSum += mSum
        this.totDisk += mDiskount
        this.totPay += mToPay
      }
      return items
    }
  }
}
</script>

<style >
.centered_sec {
  text-align: center;
}
</style>