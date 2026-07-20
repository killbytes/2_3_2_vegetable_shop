import { useState } from 'react'
import reactLogo from '.shared/assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.scss'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt="" />
                    <img src={reactLogo} className="framework" alt="React logo" />
                    <img src={viteLogo} className="vite" alt="Vite logo" />
                </div>
                <div>
                    <h1>Get started</h1>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
                    </p>
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
            </section>

            <div className="ticks"></div>

            <section id="next-steps">
                <div id="docs">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#documentation-icon"></use>
                    </svg>
                    <h2>Documentation</h2>
                    <p>Your questions, answered</p>
                    <ul>
                        <li>
                            <a href="https://vite.dev/" target="_blank">
                                <img className="logo" src={viteLogo} alt="" />
                                Explore Vite
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/" target="_blank">
                                <img className="button-icon" src={reactLogo} alt="" />
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="social">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#social-icon"></use>
                    </svg>
                    <h2>Connect with us</h2>
                    <p>Join the Vite community</p>
                    <ul>
                        <li>
                            <a href="https://github.com/killbytes/ReactVite" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="container1">
                <div className="card1">
                    <h2 className="card1__title">This my container</h2>
                    <p className="card1__description">
                        <span className="card1__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad alias aspernatur assumenda, cum debitis eveniet impedit inventore ipsam laborum, maiores nam odit optio praesentium quas sint totam unde?</span><span>A aliquam aperiam commodi culpa cum deserunt dolores doloribus, earum fuga id illum minus molestiae necessitatibus nemo perspiciatis, placeat praesentium quibusdam quod temporibus totam vel, veniam vitae! Officiis, similique veniam?</span><span>Ad aut culpa cupiditate deleniti distinctio expedita in laboriosam maiores nam nisi, nostrum odio omnis pariatur qui quo, rem sequi similique! Ab hic ipsam porro provident quis tempore unde voluptatibus?</span>
                    </p>
                </div>
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    )
}

export default App
