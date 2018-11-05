window.onload = () => {



 



    const template = `
        <ul>
            {{#each items}}
            <li>{{name}} {{lastName}}</li>
            {{/each}}
        </ul>
        `;


    document.appendChild(template);





}