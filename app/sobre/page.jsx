import "./sobre.css";
import livro1 from "../../public/ÉAssimQueAcaba.png";
import livro2 from "../../public/BienalDoLivro2024.png"
import livro3 from "../../public/PostsIts.png"
import Post from "../../components/Post";

export default function Sobre() {
    return (
        <div className="container">
            <Post image={livro1} title="É Assim Que Acaba 🌸" text="Entre e conheça É Assim Que Acaba. Uma história que vai mexer com suas emoções e refletir sobre os limites do amor e da superação. 📑" />
            <Post image={livro2} title="Bienal do Livro 2024 📚" text="Entre e explore tudo o que a Bienal do Livro tem a oferecer: uma verdadeira celebração da literatura, com lançamentos, autores e muito mais! 💌" />
            <Post image={livro3} title="Posts Its 📖" text="Descubra as melhores dicas e aprenda como usar de forma eficiente! Navegue pelos nossos Posts It’s e comece a aplicar as ideias! ✨" />
        </div>
    );
}