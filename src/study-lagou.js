let lagouContainer = null

export async function bootstrap() {
    console.log('应用正在启动')    
}

export async function mount(props) {
    console.log('应用已经挂载')
    document.createElement('div')
    lagouContainer = document.createElement('div')
    lagouContainer.id = 'lagou-container'
    lagouContainer.innerHTML = `
        <div>
            <h1>Hello Lagou</h1>
        </div>
        `
    document.body.appendChild(lagouContainer)
    // 这里可以获取到全局变量，如window、document等
    console.log(props)
}

export async function unmount(props) {
    console.log('应用已经卸载')
    console.log(props)
    document.body.removeChild(lagouContainer)
}