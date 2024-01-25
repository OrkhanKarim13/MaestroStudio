export const useLinks = () => {

  const links = ref([
    {
      title: { en: 'Projects', az: 'az', ru: 'ru' },
      name: 'projects',
      isAdmin: true
    },
    {
      title: { en: 'Services', az: 'az', ru: 'ru' },
      name: 'services',
      isAdmin: true
    },
    {
      title: { en: 'Blogs', az: 'az', ru: 'ru' },
      name: 'blogs',
      isAdmin: true
    },
    {
      title: { en: 'About', az: 'az', ru: 'ru' },
      name: 'about',
      isAdmin: false
    },
    {
      title: { en: 'Contact', az: 'az', ru: 'ru' },
      name: 'contact',
      isAdmin: false
    },
  ])

  function getLinks({ names, sorted = true }) {
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