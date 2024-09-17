<template>
    <div class="grid grid-cols-1 md:grid-cols-2 md:mx-9 md:my-6  md:gap-6">
        <div class="bg-[#0047FF]  px-4 py-6 md:p-12 flex flex-col items-start justify-between  md:rounded-[10px]">
            <div class="  text-white text-[54px] lg:text-[79px] md:font-750">{{ $t("project_support") }}
            </div>
            <div class="my-12 flex items-center justify-center ">
                <img src="@/assets/images/arraow_icon.svg" alt="arrow">
            </div>
            <div class="flex flex-col items-start justify-center gap-5">
                <p class="text-white text-lg w-2/3 font-normal">{{ $t("call_us") }}</p>
            </div>
        </div>
        <form @submit.prevent="submitForm"
            class=" bg-[#0047FF] px-4 py-6  md:p-12 flex flex-col items-start justify-between gap-6  md:rounded-[10px]">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white text-white font-semibold"
                type="text" name="" v-model="form.name" id="" maxlength="30" :placeholder="$t('name_surname')">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
                type="tel" name="" id="" maxlength="15" v-model="phone" :placeholder="$t('phone')">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
                type="email" v-model="form.email" name="" id="" :placeholder="$t('email')">
            <!-- <label
                class="w-full  px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold text-center"
               >{{ $t("add_file") }}</label> -->
            <textarea v-model="form.message"
                class="w-full resize-none  px-8 py-5 rounded-full  outline-none bg-transparent border border-white  text-white font-semibold">
            </textarea>

            <button type="submit"
                class="w-full bg-white uppercase text-black-500 rounded-full font-bold py-5 border yx-8 hover:text-white hover:bg-transparent hover:border-white ">{{
                    $t("send") }}</button>
        </form>

    </div>
</template>
<script setup>
const form = ref({
    access_key: "d18e11ee-8041-4681-9cbc-489f5f2c25f5",
    subject: "New Submission from Web3Forms",
    name: "",
    email: "",
    message: "",
});

const phone = ref("")

const result = ref("");
const status = ref("");

const submitForm = async () => {
    try {
        status.value = "loading";
        const response = await $fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: {
                access_key: "d18e11ee-8041-4681-9cbc-489f5f2c25f5",
                subject: "Maestro Studio Yeni Qeydiyyat",
                name: form.value.name,
                email: form.value.email,
                message: `
                ${phone.value}
                ${form.value.message}
                `,
            },
        });
        console.log(response);
        result.value = response.message;
        if (response.status === 200) {
            status.value = "success";
        } else {
            console.log(response); // Log for debugging, can be removed
            status.value = "error";
        }
    } catch (error) {
        console.log(error); // Log for debugging, can be removed
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        // Reset form after submission
        form.value.name = "";
        form.value.email = "";
        form.value.message = "";
        phone.value = ""
        // Clear result and status after 5 seconds
        setTimeout(() => {
            result.value = "";
            status.value = "";
        }, 5000);
    }
};
</script>