<template>
    <footer class="md:mx-9 md:mb-6">
        <div class="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 md:px-16 py-6 md:rounded-[10px] bg-[#0047FF] ">
            <div class=" md:mx-auto flex flex-col justify-start items-start px-4 md:py-6 gap-6">

                <img class="md:w-full" src="../assets/images/logowhite.svg" alt="logo">

                <div class="flex flex-col gap-5">
                    <div class="flex items-center gap-6">
                        <a class="hover:scale-[1.05]" href="https://www.facebook.com/bymaestro.st" target="_blank"><img
                                src="../assets/images/facebook-icon.svg" alt="icon"></a>
                        <a class="hover:scale-[1.05]" href="https://www.instagram.com/maestrostudio_/" target="_blank"><img
                                src="../assets/images/instagram-icon.svg" alt="icon"></a>
                        <a class="hover:scale-[1.05]" href="https://www.youtube.com/@maestroschoolaz"><img src="../assets/images/youtube-icon.svg"
                                alt="icon"></a>
                    </div>
                    <div class="w-full border-b border-white"></div>
                    <div class="flex gap-6">


                    </div>


                </div>

            </div>
            <div class=" md:mx-auto flex flex-col gap-2 justify-start items-start px-4 md:py-6 ">

                <p class="hover:scale-[1.05]">  <a class="text-large text-white font-normal leading-7 " href="https://maps.app.goo.gl/tQwRpnFet4RbGqRd9" target="_blank">{{ $t("our_address") }}</a>
                </p>
                <div class="w-full border-b border-white my-3"></div>
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><a href="mailto:info@maestro.st">info@maestro.st</a>
                </p>
                <div class="w-full border-b border-white my-3"></div>
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><a href="tel:+994502998490">+994 50 299 84 90</a></p>
            </div>
            <div class=" md:mx-auto flex flex-col justify-start items-start px-4 md:py-6 ">
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><nuxt-link to="/about">{{$t("about")}}</nuxt-link>
                </p>

                <div class="w-full border-b border-white my-3"></div>
                <p class=" text-white leading-7 hover:scale-[1.05]"><nuxt-link to="/services">{{ $t("services") }}</nuxt-link>
                </p>
                <div class="w-full border-b border-white my-3"></div>
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><nuxt-link to="/projects">{{$t("projects")}}</nuxt-link>
                </p>
                
                
                
            </div>
            <div class=" md:mx-auto flex flex-col justify-start items-start px-4 md:py-6 ">
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><nuxt-link to="/about">{{$t("about")}}</nuxt-link>

                </p>

        
                <div class="w-full border-b border-white my-3"></div>
                <p class="text-lg text-white leading-7 hover:scale-[1.05]"><nuxt-link to="/contact">{{$t("contact")}}</nuxt-link>
                </p>

            </div>
        </div>
        <div>

        </div>



    </footer>
</template>


<script setup>
import { useI18n } from 'vue-i18n';
 const { locale } = useI18n()
</script>