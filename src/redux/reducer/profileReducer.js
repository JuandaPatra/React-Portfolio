import prof from "../../asset/foto-profile.jpg"
import porto1 from "../../asset/portofolio-1-1.png"
import porto2 from "../../asset/portofolio-2-1.png"
import porto3 from "../../asset/porto-3-1.png"
import porto4 from "../../asset/porto-4.png"
import {porto5, porto6} from "../../helper/index"

const INITIAL_STATE={
    portofolio :[
        {img :porto1, title: "News Portal UI Using NewsAPI", link :"",git :"https://github.com/JuandaPatra/News-Using-API-News-UI", desc :"Pembuatan portal berita yang terintegrasi dengan API dari News API. Respon dari API tersebut dimanipulasi untuk digunakan sebagai konten dari web. Framework yang digunakan adalah React dengan dibantu styling Bootstrap dan SASS(pre-processor CSS)", dis : true}, 
        {img :porto2, title: "Basketball News UI with React" , link :"https://basketball-news-ui.herokuapp.com/",git :"https://github.com/JuandaPatra/Basketball-News-UI",
        desc :"User Interface untuk sebuah portal berita Basket yang dapat menampilkan trending news dan berita terbaru. Framework yang digunakan adalah React dan styling Bootstrap dan SASS(Pre-processor CSS)", dis : false}, 
        {img : porto3, title: "Furniture E-Commerce Online Shop UI", link :"https://juandapatra.github.io/furniture-ecommerce-ui/", git :"https://github.com/JuandaPatra/furniture-ecommerce-ui", desc:"User Interface sebuah Online shop yang bergerak di bidang home decor atau furnitur yang mengincar pasar sangat luas dan yang biasanya digemari masyarakat umum dengan menyukai desain aesthetic.Framework yang digunakan adalah React dan styling Bootstrap dan SASS(Pre-processor CSS)", dis : false},
        {img : porto4, title: "Minimalist Clothing Online Shop UI", link :"https://clothing-commerce.herokuapp.com/", git :"https://github.com/JuandaPatra/Clothing-eCommerce", desc:"Online shop untuk sebuah distro atau clothing store yang mengincar pasar minimalis(baju polos) yang semakin diperkuat dengan UI yang minimalis sesuai dengan produk yang dijual sehingga memanfaatkan lega/ banyak ruang yang tersisa di halaman web. Framework yang digunakan adalah React dan styling Bootstrap dan SASS(Pre-processor CSS) ",  dis : false},
        {img : porto5, title: "Full Stack Online Shop (MERN)", link :"",git :"https://github.com/JuandaPatra/shoes-e-commerce", desc:"Sebuah Website Online Shop yang berfokus menjual sepatu sport yang bersegmen untuk anak muda yang senang berolahraga dan suka menjadi pusat perhatian. Framework yang digunakan adalah React dan styling Bootstrap dan SASS(Pre-processor CSS). Untuk backend dibuat dengan framework Express dan menggunakan database MySQL.",  dis : true},
        {img : porto6, title: "Full Stack Parcel Online Shop (MERN)", link :"https://parcel-1.purwadhikafs2.com/",git :"", desc:"Sebuah Website Online Shop yang berfokus menjual Parsel yang dapat isi produknya bisa dikustomisasi oleh user sendiri  . Library yang digunakan adalah React dan styling Bootstrap . Untuk backend dibuat dengan framework Express dan menggunakan database MySQL.",  dis : false},
    ],
    profile  : prof,
}

const profileReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default :
            return state
    }
}

export default profileReducer