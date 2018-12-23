<template>

<div class="column is-half is-offset-one-quarter">
    <form action="/login" method="post" enctype="application/x-www-form-urlencoded">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="tel" placeholder="Телефон" name="username">
    <span class="icon is-small is-left">
      <i class="fas fa-phone"></i>
    </span>
    
  </p>
  <p class="help">Телефон в формате 79781234567 без (+)</p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" name="password">
    <span class="icon is-small is-left">
      <i class="fas fa-barcode"></i>
    </span>
  </p>
  <p class="help">Последние 8 цифр Вашей дисконтной карты</p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" type="submit">
      Login
    </button>
    
    
  </p>
</div>
</form>
</div>

</template>