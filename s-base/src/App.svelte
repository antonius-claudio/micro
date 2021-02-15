<script>
  import { getNilai, setNilai } from '@micro/api';
  let nilaiLokal = 0;
  
  const getNilaiApi = getNilai();
  getNilaiApi
    .then((result) => {
      nilaiLokal = result;
    }).catch((err) => {
      console.log('err', err);
    });

    
  const handleClick = async () => {
    const setNilaiApi = await setNilai(nilaiLokal+1);
    nilaiLokal = setNilaiApi;
  };

</script>

<style>
  section {
    font-size: 1.5rem;
  }
</style>

<section>
  <div>s-base is mounted!</div>
  <button on:click={handleClick}>increment</button>
  <div>Nilai: {nilaiLokal}</div>
</section>