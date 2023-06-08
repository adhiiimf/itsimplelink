<script setup>
defineProps({
    visitor: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1>Hi, {{ visitor }}</h1>
        <h2>Welcome to Simplyourlink</h2>
        <span>Create your contact link simply with me</span>
    </div>
</template>