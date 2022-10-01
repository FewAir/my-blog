 <template>
  <div class="box">
    <HeadBox></HeadBox>
    <MenuBox> </MenuBox>
    <BodyBox>
      <router-view></router-view>
    </BodyBox>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeadBox from '@/components/BlogHead.vue'
import MenuBox from '@/components/BlogMenu.vue'
import BodyBox from '@/components/BlogBody.vue'
import FooterBox from '@/components/BlogFooter.vue'
export default {
  components: {
    HeadBox,
    MenuBox,
    BodyBox,
    FooterBox
  },
}
  </script>  