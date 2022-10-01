
<template>
  <div id="menu_box">
    <ul>
      <li
        ref="test"
        :class="{ active: item === isActive }"
        v-for="(index, item) in iconAttribute"
        :key="item"
        @mouseenter="iconChange(item, $event)"
      >
        <span class="icon">
          <router-link :to="index.iconLink"
            ><ion-icon :name="index.iconName"></ion-icon
          ></router-link>
        </span>
        <span class="text">
          <router-link :to="index.iconLink">{{ index.iconText }}</router-link>
        </span>
      </li>
      <li class="background_box" :style="moveStyle"></li>
    </ul>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      isActive: 0,
      iconAttribute: [
        { iconName: 'planet', iconText: '我的主页', iconLink: '/home' },
        { iconName: 'help-circle', iconText: '我的疑问', iconLink: '/question' },
        { iconName: 'document', iconText: '我的项目', iconLink: '/project' },
        { iconName: 'people', iconText: '我的简历', iconLink: '/resume' },
        { iconName: 'game-controller', iconText: '想玩游戏', iconLink: '/resume' },
        { iconName: 'musical-notes', iconText: '我要听歌', iconLink: '/resume' },
      ],
      moveStyle: {
        width: '',
        height: '',
        left: '',
      }
    }
  },
  mounted () {
    this.moveStyle = {
      width: this.$refs.test[0].offsetWidth + 'px',
      height: this.$refs.test[0].offsetHeight + 'px',
      left: this.$refs.test[0].offsetLeft + 'px'
    }
  },

  methods: {
    iconChange (index, { target }) {
      this.isActive = index
      this.moveWidth = target.clientWidth
      this.moveStyle = {
        width: target.clientWidth + 'px',
        height: target.clientHeight + 'px',
        left: target.offsetLeft + 'px',
      }
    },
  },
})
</script>
