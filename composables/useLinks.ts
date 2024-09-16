export const useLinks = () => {

  const links = ref([
    {
      title: { en: 'Projects', az: 'LAYİHƏLƏR', ru: 'Проекты' },
      name: 'projects',
      isAdmin: true
    },
    {
      title: { en: 'Services', az: 'XİDMƏTLƏR', ru: 'Услуги' },
      name: 'services',
      isAdmin: true
    },
    {
      title: { en: 'Blogs', az: 'Bloqlar', ru: 'Блоги' },
      name: 'blogs',
      isAdmin: true
    },
    {
      title: { en: 'About', az: 'Haqqımıznda', ru: 'О нас' },
      name: 'about',
      isAdmin: false
    },
    {
      title: { en: 'Contact', az: 'Əlaqə', ru: 'Контакт' },
      name: 'contact',
      isAdmin: false
    },
  ])

  function getLinks({ names , sorted = true }) {
    const filteredLinks = links.value.filter(link => names.includes(link.name))

    // Sort the filtered array based on the order of names
    if(sorted) return names.map(name => filteredLinks.find(link => link.name === name));
    return filteredLinks
  }

  return {
    links,
    getLinks
  }
}