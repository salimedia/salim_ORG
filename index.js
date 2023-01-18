
import {data} from './datasource.js';

var items = new ej.data.DataManager(data);

var diagram = new ej.diagrams.Diagram({
    width: "1000px",
    height: "600px",
    dataSourceSettings: {
        id: 'id', parentId: 'manager', dataManager: items,
        doBinding: function (node, data) {
            // You will get the employee information in data argument and bind that value directly to node's built-in properties.
            node.annotations = [{ content: data.role }];
            node.style = { fill: data.color };
        }
    },
    layout: {
        type: 'OrganizationalChart' 
    },
    getNodeDefaults: nodeDefaults,
    getConnectorDefaults: connectorDefaults,
    // hide the gridlines in the diagram
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None }
});
diagram.appendTo('#diagram');

function nodeDefaults(node) {
    node.annotations[0].style.color = "white";
    node.width = 120; 
    node.expandIcon = { shape: 'Minus' };
    node.collapseIcon = { shape: 'Plus' };
    return node;
}

function connectorDefaults(connector) {
    connector.type = 'Orthogonal';
    connector.targetDecorator = { shape: 'None' };
    return connector;
}
