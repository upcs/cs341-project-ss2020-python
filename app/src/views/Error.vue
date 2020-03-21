<template>
    <div class="errorContainer">
            <span class="msg">
                {{ message }}
            </span>

            <img class="errorImg" src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"/>
    </div>

</template>
<script>
export default {
    name: 'Error',
    props: {
        message: String
    }
}
</script>
<style scoped>
.errorContainer {
    border: 1px solid red;
    border-radius: 5px;
    color: red;
    align-content: center;
}
.errorImg {
    height: 15px;
    width: 15px;
    margin-top: 5px;
    margin-right: 3px;
    
}
.msg {
    font: black;
    margin-left: 5px;
    margin-right: 15px;
    font-size: 15px;
}
</style>