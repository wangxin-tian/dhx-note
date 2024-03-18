<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '梁习兵',
    title: 'PHP Creator',
    links: [
      { icon: 'blog', link: 'https://www.liangmoren.com/' }
    ]
  },
]
</script>

# 友链

向我的朋友们问好。

<VPTeamMembers size="small" :members="members" />
