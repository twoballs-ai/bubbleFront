import Canvas from '../../../Canvas';


function EditorEdit() {
    let current = null
    const NodesID = listNodes()
    const elements = {}
    const newElements = {}
    const EdgesId = listEdges()
    let elementId = {}
    let numBubbles = 0

    const draw = (context) => {
         context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(10, 10, 50, 50);
  
    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 50, 50);
    drawingBubblesFromServer()
  };
  async function canvas_page() {

    // const name = await 1;
  
    return 1
  }
  
  async function graphModel() {
    let canvas_id = await canvas_page();
    
    const url = 'http://127.0.0.1:8000/api/canvas/'+canvas_id
    console.log(url)
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
    
  }
  async function getEdgeList() {
    let canvas_id = await canvas_page();
    const url = 'http://127.0.0.1:8000/api/edge-list/'+canvas_id
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function listNodes() {
    // graphModel().then(bubbles => {
    //   console.log(bubbles) // fetched movies
    // });
    let circles = await graphModel()
    // const graph = graphModel()
    // console.log(circles)
    let itemsNodesID = []
    const nodesValues = circles['nodes']
    const listingNodes = () => {
      nodesValues.forEach(function (item, index, arr) {
        itemsNodesID.push(item)
        // console.log(item)
      });
    }
    listingNodes()
    console.log(itemsNodesID)
    return itemsNodesID
  }
  async function listEdges() {
    let circles = await getEdgeList()
    let itemsEdgesID = []
    const edgesValues = circles
    const listingEdges = () => {
      edgesValues.forEach(function (item, index, arr) {
        itemsEdgesID.push(item)
      });
    }
    listingEdges()
    console.log(itemsEdgesID)
    return itemsEdgesID
  }
async function drawingBubblesFromServer() {
  let num = (await NodesID).length
  // console.log(num)
  for (let items = 0; items < num; items++) {
    // subnodes= NodesID[items]['subnodes']
    //  console.log(await NodesID)
    textIntoTheCircle = (await NodesID)[items]['label']
    // console.log(textIntoTheCircle)
    // link = (await NodesID)[items]['link']
    positionX = (await NodesID)[items]['posX']
    positionY = (await NodesID)[items]['posY']
    style = (await NodesID)[items]['style']
    buttonId = (await NodesID)[items]['node_id']
    elemId= (await NodesID)[items]['id']
    // создание dom-элемента
    const element = document.createElement('div')
    // const textNode = document.createElement('p');
    const id = buttonId
    element.id = id
    // console.log(id)
    // element.setAttribute('href', link);
    element.className = style;
    element.innerHTML = `<div class="textParent"><p class="textIntoTheCircle">${textIntoTheCircle}</p><br><p class="textIntoTheCircle">id:${buttonId}</p></div>`;
    document.body.prepend(element)
    // document.body.prepend(textNode)
    // console.log(element)
    // тут будут храниться и изменяться все его координаты
    elements[id] = {
      elemId: elemId,
      x: positionX,
      y: positionY,
      startX: 0,
      startY: 0,
      label: textIntoTheCircle,
      style: style
    }
    // начальное положение
    translate(element, elements[id].x, elements[id].y)
    element.addEventListener("click", { handleEvent: clickBubbles, buttonId: buttonId, elemId:elemId, textIntoTheCircle:textIntoTheCircle });
  }
  console.log(elements)
  // console.log(Object.keys(elements).length)
  // connect(elements,subelements)
  connect(elements)
}

    return (
        <>
    <Canvas draw={draw} height={1000} width={1000} />
        </>
    )

}
export default EditorEdit