<template>
    <div class="container_misc">
        <h2 class="desc_header">Top 5 books 📚 that have impacted my life:</h2>
        <ul class="book_list">
          <div class="book_item"><span class="number_style">1</span> <p><strong>Seneca</strong> • Letters from a Stoic</p></div>
          <div class="book_item"><span class="number_style">2</span> <p><strong>Thich Nhat Hanh</strong> • Fear</p></div>
          <div class="book_item"><span class="number_style">3</span> <p><strong>Ryan Holiday</strong> • Stillness Is the Key</p></div>
          <div class="book_item"><span class="number_style">4</span> <p><strong>Marie Forleo</strong> • Everything is Figureoutable</p></div>
          <div class="book_item"><span class="number_style">5</span> <p><strong>Simon Sinek</strong> • Start With Why</p></div>
        </ul>
        <div>
            <p>
            </p>
        </div>
    </div>    
</template>

<script>

export default {
    head () {
        return {
            title: 'Misc ∙ MM',
            meta: [
                { 
                  hid: 'Miscellanious information',
                  name: 'Miscellanious information like favorite books',
                  content: 'Miscellanious information to give a deeper look into fundamentals.'
                }
            ]
    }
  }
    
}
</script>

<style lang="scss" scoped>

.container_misc {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
}

.large_header {
  font-size: 2em;
  font-weight: 900;
  color: rgb(77, 21, 21);
  text-align: center;
  margin-top: 200px;
}

.desc_header {
  font-size: 1.2em;
  font-weight: lighter;
  color: rgb(253, 253, 253);
  text-align: center;
  margin-bottom: 48px;
  margin-top: 4em;
}

.book_list {
  color: white;
  text-align: left;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 1.5em;
  letter-spacing: 1px;
}

.book_item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.number_style {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 100px;
  min-width: 40px;
  min-height: 40px;
  text-align: center;
  margin: 16px;
}

</style>