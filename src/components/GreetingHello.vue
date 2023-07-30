<script setup>
defineProps({
    visitor: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex items-center">
        <font-awesome-icon icon="hands-clapping" class="text-8xl mr-4" />
        <div>
            <h1 class="text-4xl italic">Hi<span :class="{}">,</span> <span class=" font-bold">{{ visitor }}</span></h1>
            <h2 class="text-xl my-2">Welcome to <span class=" text-emerald-500 font-bold">simplyour</span><span class="text-green-600 font-bold">link</span></h2>
            <span class="text-semibold">make your link with us</span>
        </div>
    </div>
</template>