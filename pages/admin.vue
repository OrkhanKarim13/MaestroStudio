<script setup lang="ts">
import { onAuthStateChanged } from "firebase/auth";

definePageMeta({
  layout: 'plain'
})

const { auth } = useFirebase()
const router = useRouter()
const authStore = useAuthStore()
let authListener = <Function | null>(null)

if(process.client) {
  authListener = onAuthStateChanged(auth, (user) => {
    if (!user) return router.push({ name: 'login' })
    authStore.authUser = user
  })
}

// clear up listener
onBeforeUnmount(() => authListener?.())

// SIDEBAR
const isSidebarMobileOpen = ref(false)

function toggleSidebarMobile() {
  const aside = document.querySelector('aside')
  const sidebarBackdrop = document.querySelector('#sidebarBackdrop')

  aside?.classList.toggle('hidden')
  sidebarBackdrop?.classList.toggle('hidden')
  isSidebarMobileOpen.value = !isSidebarMobileOpen.value
}

</script>

 <template>
  <div>
    <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button @click="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                  <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
              </button>
              <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
              <!-- <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo"> -->
              <span class="self-center whitespace-nowrap">Maestro</span>
              </a>
            </div>
            <div class="flex items-center gap-2">
              <button class="p-2 border rounded-md">Sign out</button>
              <!-- <div class="flex gap-2 items-center text-sm">
                <span>Asgar Asgarov</span>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="">
              </div> -->
            </div>
        </div>
      </div>
    </nav>
    <div class="flex overflow-hidden bg-white pt-16">
        <AdminSidebar />
        <div id="main-content" class="h-full w-full flex flex-col justify-between lg:ml-64">
          <main class="flex h-full">
            <NuxtPage />
          </main>
        </div>
    </div>
  </div>
</template>