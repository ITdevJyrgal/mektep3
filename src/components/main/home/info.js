import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width" />
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        <p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>311</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3275</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>38</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    <p style={{fontSize: media(16, 18)}}> Вот уже на протяжении нескольких лет наша школа распахивает свои двери учителям, ученикам и их родителям. И первый
                        человек который встречает их на пороге школы — это директор. Как важно иметь в школе
                        руководителя, который смог организовать и направить всю деятельность коллектива педагогов и
                        учеников в нужное русло. На протяжении этих лет нашу школу возглавляли мудрые и талантливые,
                        инициативные люди.</p>
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>
                                    1928-жылы  жайлоолордо без уйду кат таанытып сабатын ачуу боюнча иштер жургузулгон
                                    1934- жылы Дон-Капана Эрмаматов Орунбайдын уйундо ликбез ачылган
                                    Мектепте ар турдуу адамдар окуган  жашка чектоо жок болгон
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;