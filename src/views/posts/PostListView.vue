<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter v-model:title="params.title_like" :limit="params._limit" @update:limit="changeLimit" />

    <hr class="my-4" />

    <AppLoading v-if="loading" />

    <AppError v-else-if="error" :message="error.message" />

    <template v-else-if="!isExist">
      <p class="text-center py-4 text-muted">No Results</p>
    </template>

    <template v-else>
      <AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
        <template v-slot="{ item }">
          <PostItem :title="item.title" :content="item.content" :created-at="item.createdAt" @click="goPage(item.id)" @modal="openModal(item)"></PostItem>
        </template>
      </AppGrid>

      <AppPagination :current-page="params._page" :page-count="pageCount" @page="(page) => (params._page = page)" />
    </template>
    <Teleport to="#modal">
      <PostModal v-model="show" :title="modalTitle" :content="modalContent" :created-at="modalCreatedAt" />
    </Teleport>

    <!-- <template v-if="posts && posts.length > 0">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template> -->
  </div>
</template>

<script setup>
import PostModal from '@/components/posts/PostModal.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import { getPosts } from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();

const error = ref(null);
const loading = ref(false);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 6,
  title_like: '',
});
const changeLimit = (value) => {
  params.value._limit = value;
  params.value._page = 1;
};

const isExist = computed(() => posts.value && posts.value.length > 0);

const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchPosts = async () => {
  try {
    loading.value = true;
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
// fetchPosts();
watchEffect(fetchPosts);

// eslint-disable-next-line prettier/prettier
const goPage = (id) => {
  // router.push(`/posts/${id}`); // 하드코딩 박식

  // router에 설정한 name으로 설정하고 params로 받는 형식
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};

const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
