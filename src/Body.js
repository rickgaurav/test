import React, {Component} from 'react';
import LeftBody from './LeftBody';
import RightBody from './RightBody';

export default class Body extends Component {
    render() {
        var todos = ["Learn react", "Learn CSS", "Learn Html5", "Learn Bootstrap", "Learn Jenkins", "Learn Git"];
        //localStorage.setItem('todos', todos);
        function renderListItem(item) {
            return (
                <li> 
                    {item}
                </li>
            );
        }
        var todoItems = todos.map(renderListItem);



        return (
            <div className= "body">
                <div class="panel panel-default">
                <div class="panel-body">Panel Content</div>
                <div class="panel-footer">Panel Footer</div>
                </div>
            </div>
        )
    }
}

    