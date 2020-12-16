import React, {Component} from 'react'
import './Mainpage.scss'
import ButtonZakazUslugi from '../../components/ButtonZakazUslugi/ButtonZakazUslugi'
import ButtonQuestion from '../../components/ButtonQuestion/ButtonQuestion'
import CircleAnimation from '../../components/CircleAnimation/CircleAnimation'



class Mainpage extends Component{
    render(){
        return(
        <div className="Mainpage">            
            <div className="BlockHeaderCircle">
                <div>
                    <div className="H1text">
                        <span>Создаем</span>
                        <br />Продвигаем
                        <br />Поддерживаем
                    </div>
                    <div className="Text">
                        Студия полного цикла SABWEB. <br />
                        От разработки стратегии до первых результатов.
                    </div>
                    <div className="Button">
                        <ButtonZakazUslugi>
                            Выбрать услугу
                        </ButtonZakazUslugi>
                        <ButtonQuestion>
                            Заказать услугу
                        </ButtonQuestion>
                    </div>
                    
                </div>

                <div className="Circle">
                   <CircleAnimation />
                </div>
            </div>

            <div className="BlockPromotionSEO">
                <div className="BlockImg"> 
                    <img src="./img/blockSeo.png" alt="SEO"></img>
                </div>
                <div className="BlockText">
                    <h2>SEO -ПРОДВИЖЕНИЕ</h2>
                    <div>Поможем Вам вырваться на лидирующие позиции среди конкурентов с помощью поисковой оптимизации Вашего сайта</div>
                    <ul>
                        <li>Детальная проработка запросов</li>
                        <li>Бесплатный аудит</li>
                        <li>Трафиковое продвижение</li>
                        <li>Позиционное продвижение</li>
                    </ul>
                    <ButtonZakazUslugi>
                            Подробнее
                    </ButtonZakazUslugi>
                </div>
            </div>
        </div>
        )
    }
}

export default Mainpage
