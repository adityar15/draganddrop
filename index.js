export const makeDraggable = (options) => {
    if(!options.hasOwnProperty('sourceID') || !options.hasOwnProperty('targetID'))
    {
        console.error("source or target id not provided")
        return false
    }
    else{
        const source = document.getElementById(options.sourceID), target = document.getElementById(options.targetID)
        if(!source || !target)
        {
            console.error('provide id attribute only. Do not include #')
            return false
        }
        else{
            target.addEventListener('drop', onDrop)
            target.addEventListener('dragover', onDragOver)
            source.setAttribute('draggable', true)
            source.addEventListener('dragstart', onDragStart)
        }
    }
}

function onDragStart(e){
    e.dataTransfer.setData('id', e.target.id)
}

function onDrop(e)
{
    e.preventDefault()
    var id = e.dataTransfer.getData('id')
    e.target.appendChild(document.getElementById(id))
}

function onDragOver(e)
{
    e.preventDefault()
    const event = new CustomEvent('onDragSuccess', { detail: e.target.id });
    window.dispatchEvent(event)
}