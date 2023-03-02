import React from "react"
import { fileExtensions } from "./CodeBlock";

export default function BigCard (props) {

    function enableSection(section) {
        for (const property in section) {
            try {
                if (section[property] && section[property].list.length !== 0) {
                    return true
                }
            } catch (e) {
                if (section[property] && section[property].length !== 0) {
                    return true
                }
            }
        }
        return false
    }

    let card;

    if (props.purpose === 'title') {
        const transformations = {
            transform:`translateX(${props.profilePic.transformX !== undefined ? props.profilePic.transformX : 0}px) translateY(${props.profilePic.transformY !== undefined ? props.profilePic.transformY : 0}px) scale(${props.profilePic.transformScale !== undefined ? props.profilePic.transformScale : 0}%)`
        }
        card = (<div className={`big-card card pfp`}>
                    {props.profilePic.image === 'load' ?
                        <div className="loading"></div> :
                        <img src={props.profilePic.image} style={transformations} alt='Profile'/> 
                    }
                    <div className="gradient"></div>
                    <span>{props.name},{(props.age)}</span>
                </div>)
    } else if (props.purpose === 'bio'){
        let background = props.backgroundInfo;
        let ethnicities = background.ethnicity.list.map(ethnicity => <span key={ethnicity}>{ethnicity}</span>)
        let languages = background.languages.list.map(language => <span key={language}>{language}</span>)
        card = (<div className={`big-card bio card`}>
                    <h1>About Me</h1>
                    {props.bioText &&
                    (<div className="bio-text">
                        {props.bioText}
                    </div>)}
                    {enableSection(background) && 
                    (<div className="background">
                        <h2>Background</h2>
                        {background.ethnicity.list.length !== 0 && (
                            <><h5>Ethnicity</h5>
                            <div>
                                {ethnicities}
                            </div></>
                        )}
                        {background.languages.list.length !== 0 && (
                            <><h5>Languages spoken</h5>
                            <div>
                                {languages}
                            </div></>
                        )}
                        {background.education && (
                            <><h5>Education</h5>
                            <div>
                                <span>{background.education}</span>
                            </div></>
                        )}
                        {background.religion && (
                            <><h5>Religion</h5>
                            <div>
                                <span>{background.religion}</span>
                            </div></>
                        )}
                        {background.occupation && (
                            <><h5>Occupation</h5>
                            <div>
                                <span>{background.occupation}</span>
                            </div></>
                        )}
                    </div>)}
                </div>)
    } else if (props.purpose === 'code'){
        card = (<div className={`big-card card code`}>
                    <div className="top">
                        {
                            //!props.viewport.portrait &&
                        <div className="nav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>}
                        <div className="tab">{`${props.codeObj.filename + fileExtensions[props.codeObj.language]}`}</div>
                    </div>
                        <pre>
                            <code class="language-javascript">
                                <br/><span style={{color: "rgb(86, 156, 214)"}}> const</span><span style={{color: "rgb(144 189 255)"}}> mouseMove </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> React</span><span style={{color: "rgb(212, 212, 212)"}}>.</span><span style={{color: "rgb(220, 220, 170)"}}>useCallback</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(156, 220, 254)"}}>e</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>=&gt;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>  </span><span style={{color: "rgb(86, 156, 214)"}}>const</span><span style={{color: "rgb(144 189 255)"}}> timesPerSec </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>10</span>
                                <br/><span>  </span><span style={{color: "rgb(86, 156, 214)"}}>let</span><span style={{color: "rgb(144 189 255)"}}> wait </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(86, 156, 214)"}}>false</span><span style={{color: "rgb(212, 212, 212)"}}>;</span>
                                <br/><span>  </span><span style={{color: "rgb(166 130 222)"}}>if</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(144 189 255)"}}>isMouseDown</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>    </span><span style={{color: "rgb(166 130 222)"}}>if</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>!</span><span style={{color: "rgb(144 189 255)"}}>wait</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>      </span><span style={{color: "rgb(86, 156, 214)"}}>const</span><span style={{color: "rgb(144 189 255)"}}> mouseDelta </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> e</span><span style={{color: "rgb(212, 212, 212)"}}>.</span><span style={{color: "rgb(144 189 255)"}}>clientX </span><span style={{color: "rgb(212, 212, 212)"}}>-</span><span style={{color: "rgb(144 189 255)"}}></span>
                                <br/><span>      </span><span style={{color: "rgb(220, 220, 170)"}}>setStartPoint</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(144 189 255)"}}>e</span><span style={{color: "rgb(212, 212, 212)"}}>.</span><span style={{color: "rgb(144 189 255)"}}>clientX</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span>
                                <br/><span>      </span><span style={{color: "rgb(220, 220, 170)"}}>setSliderX</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(156, 220, 254)"}}>prev</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>=&gt;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>        </span><span style={{color: "rgb(86, 156, 214)"}}>let</span><span style={{color: "rgb(144 189 255)"}}> percentage </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(144 189 255)"}}>prev </span><span style={{color: "rgb(212, 212, 212)"}}>+</span><span style={{color: "rgb(144 189 255)"}}> mouseDelta</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>/</span><span style={{color: "rgb(144 189 255)"}}> windowMaxDelta </span><span style={{color: "rgb(212, 212, 212)"}}>*</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>100</span>
                                <br/><span>        </span><span style={{color: "rgb(166 130 222)"}}>if</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(144 189 255)"}}>percentage </span><span style={{color: "rgb(212, 212, 212)"}}>&lt;=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>-</span><span style={{color: "rgb(181, 206, 168)"}}>100</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>          </span><span style={{color: "rgb(166 130 222)"}}>return</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>-</span>
                                <br/><span>        </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(166 130 222)"}}>else</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(166 130 222)"}}>if</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(144 189 255)"}}>percentage </span><span style={{color: "rgb(212, 212, 212)"}}>&gt;=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>0</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>          </span><span style={{color: "rgb(166 130 222)"}}>return</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>0</span>
                                <br/><span>        </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(166 130 222)"}}>else</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>          </span><span style={{color: "rgb(166 130 222)"}}>return</span><span style={{color: "rgb(144 189 255)"}}> prev </span><span style={{color: "rgb(212, 212, 212)"}}>+</span>
                                <br/><span>        </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span>
                                <br/><span>      </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span>
                                <br/><span>      wait </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(86, 156, 214)"}}>true</span>
                                <br/><span>      </span><span style={{color: "rgb(220, 220, 170)"}}>setTimeout</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>=&gt;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>        wait </span><span style={{color: "rgb(212, 212, 212)"}}>=</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(86, 156, 214)"}}>false</span>
                                <br/><span>      </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(212, 212, 212)"}}>,</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>1000</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>/</span><span style={{color: "rgb(144 189 255)"}}> timesPerSec</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(212, 212, 212)"}}>;</span>
                                <br/><span>    </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span>
                                <br/><span>    </span><span style={{color: "rgb(220, 220, 170)"}}>setTimeout</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>=&gt;</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(212, 212, 212)"}}>&#123;</span>
                                <br/><span>      </span><span style={{color: "rgb(220, 220, 170)"}}>setFirstInteraction</span><span style={{color: "rgb(212, 212, 212)"}}>&#40;</span><span style={{color: "rgb(86, 156, 214)"}}>false</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span>
                                <br/><span>    </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(212, 212, 212)"}}>,</span><span style={{color: "rgb(144 189 255)"}}> </span><span style={{color: "rgb(181, 206, 168)"}}>100</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span><span style={{color: "rgb(212, 212, 212)"}}>;</span>
                                <br/><span>  </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span>
                                <br/><span>  </span><span style={{color: "rgb(212, 212, 212)"}}>&#125;</span><span style={{color: "rgb(212, 212, 212)"}}>,</span><span style={{color: "rgb(212, 212, 212)"}}>&#91;</span><span style={{color: "rgb(144 189 255)"}}>isMouseDown</span><span style={{color: "rgb(212, 212, 212)"}}>,</span><span style={{color: "rgb(144 189 255)"}}> startPoint</span><span style={{color: "rgb(212, 212, 212)"}}>,</span><span style={{color: "rgb(144 189 255)"}}> windowMaxDelta</span><span style={{color: "rgb(212, 212, 212)"}}>&#93;</span><span style={{color: "rgb(212, 212, 212)"}}>&#41;</span>
                            </code>
                        </pre>
                    </div>)
    } else if (props.purpose === 'hobby'){
        card = (<div className={`big-card card hobby`}>
                    {props.hobby === 'load' ? 
                        <div className="loading"></div> :
                        <><img src={`https://github.com/Collert/iove/blob/master/backend/iove/frontend/public/static/assets/hobbies/gaming.gif?raw=true`} alt='Favorite hobby'/>
                    <div className="gradient"></div>
                    <div className="text">
                        <h1>Favorite hobby</h1>
                        <h2>
                            Gaming
                        </h2>
                    </div></>
                    }
                </div>)
    } else {
        card = (<div className={`big-card card hobby`}>
                    <h1>Customize card</h1>
                </div>)
    }

    return card
}