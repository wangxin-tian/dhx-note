---
layout: home
---
<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.liangmoren.com/usr/themes/GreenGrapes/img/head.jpg',
    name: '梁习兵',
    title: 'PHP Developer',
    links: [
      { icon: 'blog', link: 'https://www.liangmoren.com/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      友链
    </template>
    <template #lead>
      与志同道合的朋友一起学习交流。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>

<style lang="scss">
  .VPTeamMembersItem.medium {
    .avatar {
      width: 200px !important;
      height: 200px !important;
      &-img {
        border-radius: 10%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .04);
      }
    }
  }

  .dark .profile {
    --vp-c-bg-soft: #777883;
  }
</style>