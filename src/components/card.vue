<template>
    <el-card class="container" v-for="(item, index) in contents" :key="index" @click="openMarkdownFile(item.file)">
        <div class="card markdown-body" v-html="item.content">
        </div>
    </el-card>
</template>

<script setup>
    import { marked } from 'marked';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import 'github-markdown-css/github-markdown.css';
    import { useRouter } from 'vue-router';

    const markdownFiles = [
        'https://raw.githubusercontent.com/lg114/myWebsite/blob/main/public/md/bookList.md',
        // 添加其他 Markdown 文件路径
    ];
    const contents = ref([]);
    const router = useRouter();

    onMounted(() => {
        markdownFiles.forEach((file) => {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                }) 
                .then(markdown => {
                    contents.value.push({
                        file: file,
                        content: marked(markdown)
                    });
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
            });
        });
    });

    const openMarkdownFile = (file) => {
    };
</script>

<style scoped>
    .container{
        max-width: 100%;
        max-height: 100%;
        margin: 10px;
        padding: 5px;
        --el-card-bg-color: none;
        --el-card-border-radius: 10px;
        --el-card-border-color:#303133;
        border: 3px solid ;
    }
    .card{
        color: #DBDBDB;
    }
    .container:hover{
        color: #FFFFFF;
    }
    .markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
        background-color: #000;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
    @media screen and (max-width: 1048px) {
        /* .card {
        width: 100%;
        } */
    }
</style>