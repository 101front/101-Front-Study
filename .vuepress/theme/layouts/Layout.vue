<template>
    <ParentLayout>
        <template #page-bottom >
            <div id="comment-container">
                <div class="divider" />
                <Comment v-bind:style="{width:'100%',maxWidth: '740px'}" />
            </div>
        </template>
    </ParentLayout>
</template>

<script>
    import ParentLayout from '@parent-theme/layouts/Layout.vue'
    import Comment from '../../components/Comment'
    export default {
        components: {
            ParentLayout,
            Comment
        }
    }
</script>

<style>
#comment-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1.5rem;
}

.divider {
    border-bottom: 1px solid #eaecef;
    margin: 3rem 0;
    width: 100%;
    max-width: 740px;
}
</style>