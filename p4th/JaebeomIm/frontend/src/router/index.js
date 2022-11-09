import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '@/components/basics/Test.vue'

import ComponentTestView from "@/views/basics/ComponentTestView";
import ConcaveBoardView from "@/views/game/ConcaveBoardView";
import VueToSpringView from "@/views/axiosTest/VueToSpringView";
import RpgGameView from "@/views/rpg/RpgGameView";
import DataSendTestView from "@/views/basics/DataSendTestView";

import JpaBoardListView from "@/views/boards/JpaBoardListView";
import JpaBoardRegisterView from "@/views/boards/JpaBoardRegisterView";
import JpaBoardReadView from "@/views/boards/JpaBoardReadView";
import JpaBoardModifyView from "@/views/boards/JpaBoardModifyView";

import JpaProductListView from "@/views/products/JpaProductListView";
import JpaProductRegisterView from "@/views/products/JpaProductRegisterView";
import JpaProductReadView from "@/views/products/JpaProductReadView";
import JpaProductModifyView from "@/views/products/JpaProductModifyView";

import VuetifyTasteView from "@/views/vuetify/VuetifyTasteView";
import SwiperTestView from "@/views/vuetify/SwiperTestView";
import CalendarTestView from "@/views/vuetify/CalendarTestView";
import ImageGalleryTestView from "@/views/vuetify/ImageGalleryTestView";

import FileUploadView from "@/views/file/FileUploadView";

import CommonTest from "@/views/common/CommonTest";

import D3TestView from "@/views/d3test/D3TestView";
import D3PercentTestView from "@/views/d3test/D3PercentTestView";
import D3SensorTestView from "@/views/d3test/D3SensorTestView";

import SignUpView from "@/views/account/SignUpView";
import SignInView from "@/views/account/SignInView";
import InsoyaMainView from "@/views/insoya/InsoyaMainView";


import FreeBoardRegisterView from "@/views/insoya/Views/FreeBoardView/FreeBoardRegisterView";
import FreeBoardListView from "@/views/insoya/Views/FreeBoardView/FreeBoardListView";
import FreeBoardReadView from "@/views/insoya/Views/FreeBoardView/FreeBoardReadView";
import FreeBoardModifyView from "@/views/insoya/Views/FreeBoardView/FreeBoardModifyView";
import InsoyaSignInView from "@/views/insoya/Views/account/InsoyaSignInView";
import InsoyaSignUpView from "@/views/insoya/Views/account/InsoyaSignUpView";
import QuestionBoardListView from "@/views/insoya/Views/QuestionBoardView/QuestionBoardListView";
import QuestionBoardRegisterView from "@/views/insoya/Views/QuestionBoardView/QuestionBoardRegisterView";
import WarriorBoardListView from "@/views/insoya/Views/ClassBoardView/WarriorBoardListView";
import ArcherBoardListView from "@/views/insoya/Views/ClassBoardView/ArcherBoardListView";
import MageBoardListView from "@/views/insoya/Views/ClassBoardView/MageBoardListView";
import PirateBoardListView from "@/views/insoya/Views/ClassBoardView/PirateBoardListView";
import ThiefBoardListView from "@/views/insoya/Views/ClassBoardView/ThiefBoardListView";
import QuestionBoardReadView from "@/views/insoya/Views/QuestionBoardView/QuestionBoardReadView";
import QuestionBoardModifyView from "@/views/insoya/Views/QuestionBoardView/QuestionBoardModifyView";
import TradeBoardListView from "@/views/insoya/Views/TradeBoardView/TradeBoardListView";
import TradeBoardRegisterView from "@/views/insoya/Views/TradeBoardView/TradeBoardRegisterView";
import TradeBoardReadView from "@/views/insoya/Views/TradeBoardView/TradeBoardReadView";
import TradeBoardModifyView from "@/views/insoya/Views/TradeBoardView/TradeBoardModifyView";
import GradeUpBoardListView from "@/views/insoya/Views/GradeUpBoardView/GradeUpBoardListView";
import GradeUpBoardRegisterView from "@/views/insoya/Views/GradeUpBoardView/GradeUpBoardRegisterView";
import GradeUpBoardModifyView from "@/views/insoya/Views/GradeUpBoardView/GradeUpBoardModifyView";
import GradeUpBoardReadView from "@/views/insoya/Views/GradeUpBoardView/GradeUpBoardReadView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/components-test',
    name: 'ComponentTestView',
    component: ComponentTestView
  },
  {
    path: '/concave-board-game',
    name: 'ConcaveBoardView',
    component: ConcaveBoardView
  },
  {
    path: '/vue2spring',
    name: 'VueToSpringView',
    component: VueToSpringView
  },
  {
    path: '/rpg-game',
    name: 'RpgGameView',
    component: RpgGameView
  },
  {
    path: '/vue2spring-data-send-test',
    name: 'DataSendTestView',
    component: DataSendTestView
  },
  {
    path: '/board-list',
    name: 'JpaBoardListView',
    component: JpaBoardListView
  },
  {
    path: '/board-register',
    name: 'JpaBoardRegisterView',
    component: JpaBoardRegisterView
  },
  {
    path: '/board-read/:boardNo',
    name: 'JpaBoardReadView',
    components: {
      default: JpaBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/board-modify/:boardNo',
    name: 'JpaBoardModifyView',
    components: {
      default: JpaBoardModifyView
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-list',
    name: 'JpaProductListView',
    component: JpaProductListView
  },
  {
    path: '/product-register',
    name: 'JpaProductRegisterView',
    component: JpaProductRegisterView
  },
  {
    path: '/product-read/:productNo',
    name: 'JpaProductReadView',
    components: {
      default: JpaProductReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify/:productNo',
    name: 'JpaProductModifyView',
    components: {
      default: JpaProductModifyView
    },
    props: {
      default: true
    }
  },
  {
    path: '/vuetify-taste',
    name: 'VuetifyTasteView',
    component: VuetifyTasteView
  },
  {
    path: '/swiper-test',
    name: 'SwiperTestView',
    component: SwiperTestView
  },
  {
    path: '/calendar-test',
    name: 'CalendarTestView',
    component: CalendarTestView
  },
  {
    path: '/image-gallery-test',
    name: 'ImageGalleryTestView',
    component: ImageGalleryTestView
  },
  {
    path: '/file-upload-test',
    name: 'FileUploadView',
    component: FileUploadView
  },
  {
    path: '/common-component-test',
    name: 'CommonTest',
    component: CommonTest
  },
  {
    path: '/d3-test',
    name: 'D3TestView',
    component: D3TestView
  },
  {
    path: '/d3-percent-test',
    name: 'D3PercentTestView',
    component: D3PercentTestView
  },
  {
    path: '/d3-sensor-test',
    name: 'D3SensorTestView',
    components: {
      default: D3SensorTestView
    },
    props: {
      default: true
    }
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/insoya-main',
    name: 'InsoyaMainView',
    component: InsoyaMainView
  },
  {
    path: '/insoya-free-board',
    name: 'FreeBoardListView',
    component: FreeBoardListView
  },
  {
    path: '/insoya-grade-up-board',
    name: 'GradeUpBoardListView',
    component: GradeUpBoardListView
  },
  {
    path: '/insoya-question-board',
    name: 'QuestionBoardListView',
    component: QuestionBoardListView
  },
  {
    path: '/insoya-trade-board',
    name: 'TradeBoardListView',
    component: TradeBoardListView
  },

  {
    path: '/insoya-free-board-register',
    name: 'FreeBoardRegisterView',
    component: FreeBoardRegisterView
  },
  {
    path: '/insoya-question-board-register',
    name: 'QuestionBoardRegisterView',
    component: QuestionBoardRegisterView
  },

  {
    path: '/insoya-trade-board-register',
    name: 'TradeBoardRegisterView',
    component: TradeBoardRegisterView
  },

  {
    path: '/insoya-grade-up-board-register',
    name: 'GradeUpBoardRegisterView',
    component: GradeUpBoardRegisterView
  },

  {
    path: '/insoya-free-read/:boardNo',
    name: 'FreeBoardReadView',
    components: {
      default: FreeBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/insoya-question-read/:boardNo',
    name: 'QuestionBoardReadView',
    components: {
      default: QuestionBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/insoya-trade-read/:boardNo',
    name: 'TradeBoardReadView',
    components: {
      default: TradeBoardReadView
    },
    props: {
      default: true
    }
  },

  {
    path: '/insoya-grade-up-read/:boardNo',
    name: 'GradeUpBoardReadView',
    components: {
      default: GradeUpBoardReadView
    },
    props: {
      default: true
    }
  },

  {
    path: '/insoya-free-modify/:boardNo',
    name: 'FreeBoardModifyView',
    components: {
      default: FreeBoardModifyView
    },
    props: {
      default: true
    }
  },
  {
    path: '/insoya-question-modify/:boardNo',
    name: 'QuestionBoardModifyView',
    components: {
      default: QuestionBoardModifyView
    },
    props: {
      default: true
    }
  },

  {
    path: '/insoya-trade-modify/:boardNo',
    name: 'TradeBoardModifyView',
    components: {
      default: TradeBoardModifyView
    },
    props: {
      default: true
    }
  },

  {
    path: '/insoya-grade-up-modify/:boardNo',
    name: 'GradeUpBoardModifyView',
    components: {
      default: GradeUpBoardModifyView
    },
    props: {
      default: true
    }
  },

  {
    path: '/insoya-sign-in',
    name: 'InsoyaSignInView',
    component: InsoyaSignInView
  },

  {
    path: '/insoya-sign-up',
    name: 'InsoyaSignUpView',
    component: InsoyaSignUpView
  },

  {
    path: '/warrior-board',
    name: 'WarriorBoardListView',
    component: WarriorBoardListView
  },

  {
    path: '/archer-board',
    name: 'ArcherBoardListView',
    component: ArcherBoardListView
  },
  {
    path: '/mage-board',
    name: 'MageBoardListView',
    component: MageBoardListView
  },
  {
    path: '/pirate-board',
    name: 'PirateBoardListView',
    component: PirateBoardListView
  },
  {
    path: '/thief-board',
    name: 'ThiefBoardListView',
    component: ThiefBoardListView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
