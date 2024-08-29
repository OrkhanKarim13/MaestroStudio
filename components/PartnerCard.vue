<template>
    <div class="group">
        <div
            class="relative w-full  rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="w-full">
                <div
                    class=" bg-white h-[300px] relative flex overflow-hidden justify-center items-center rounded-lg  shadow-md shadow-black backface-hidden">
                    <img class=" p-4 group-hover:opacity-0  z-10 " :src="partner?.partner_img" alt="logo">
                    <div
                        class="absolute  mx-auto  w-15 animate-[spin_8s_ease-in-out_infinite] rounded-full  p-4 w-full h-full overflow-hidden pointer-events-none">

                        <img :src="partner?.figure_img" alt="Icon"
                            class="absolute bottom-10 left-8 w-20 h-24  filter blur-sm  animate-[spin_10s_ease-in-out_infinite] " />
                    </div>
                </div>
            </div>
            <div
                class="absolute p-4 top-0 left-0 h-fit w-full rounded-xl flex flex-col items-center justify-around text-slate-200 opacity-0 group-hover:opacity-100  [transform:rotateY(180deg)] ">
                <p class="text-black  text-base text-center">{{ partner.description }}</p>
                <div class="p-4"><img class="" :src="partner?.partner_img" alt="logo"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["partner"])

</script>
