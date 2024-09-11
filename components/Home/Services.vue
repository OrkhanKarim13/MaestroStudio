<script lang="ts" setup>


const { locale } = useI18n()
  const links = [
    {
      id:1,
      az:"Layihə idarə olunması",
      en:' Project management',
      ru:"Управление проектом"
    },
    {
      id:2,
      az:"Mobil tətbiqlərin yaradılması",
      en:'Creating mobile applications',
      ru:"Создание мобильных приложений"
    },
    {
      id:3,
      az:"Proqramlaşdırma kurslarının təşkili",
      en:'Organization of programming courses',
      ru:"Организация курсов программирования"
    },
    {
      id:4,
      az:"Təşkilati transformasiya",
      en:'Organizational transformation',
      ru:"Организационная трансформация"
    },
    {
      id:5,
      az:"Təşkilati və Biznes Strategiyalarının İnkişafı",
      en:'Development of Service Organizational and Business Strategies',
      ru:"Разработка организационных и бизнес-стратегий обслуживания"
    },
    {
      id:6,
      az:"Təşkilati və Fərdi kouçinq",
      en:'Organizational and Individual coaching',
      ru:"Организационный и индивидуальный коучинг"
    },
    {
      id:7,
      az:"Veb saytların yaradılması",
      en:'Creation of websites',
      ru:"Создание веб-сайтов"
    }
  ]
</script>


<template>
  <section class="my-6 md:mx-9 md:mb-6 bg-[#0047FF] md:rounded-md p-4 lg:p-12">
    <div class="flex flex-col items-center justify-center gap-8 lg:gap-12 ">
      <h2 class="text-white text-xl text-center lg:text-3xl font-bold leading-6">{{ $t("services_we_provide") }}</h2>
      <div class="w-full bg-white rounded-md grid  grid-cols-1  md:grid-cols-2 lg:gap-40">
        <div class=" p-3 lg:p-6">
          <ul class="flex flex-col items-start justify-center text-lg lg:text-2xl font-semibold">
            <li v-for="link in links" :key="link.id" class="px-4 py-2 lg:px-8 lg:py-4 font-bold" ><div class="text-left" v-if="link">{{ link[locale] }}</div></li>
            <button class="px-4 py-2 lg:px-8 lg:py-4 font-bold">
              <a class="uppercase  text-blue-700 text-lg font-semibold cursor-pointer" href="/services">{{ $t("see_more") }}</a>
            </button>
          </ul>
        </div>
        <div class="p-6">
          <img src="~/assets/images/service.png" alt="image">
        </div>
      </div>
    </div>
  </section>
</template>
