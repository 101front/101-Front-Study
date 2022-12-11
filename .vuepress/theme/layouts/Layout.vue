<template>
    <ParentLayout >
        <template #page-bottom>
            <div id="comment-container">
                <div id="divider" />
                <Comment class="content" v-bind:style="{width:'55%'}"/>
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
    width: 100%;
}

#divider {
    border-bottom: 1px solid #eaecef;
    width: 55%;
    margin: 3rem 0;
}
</style>