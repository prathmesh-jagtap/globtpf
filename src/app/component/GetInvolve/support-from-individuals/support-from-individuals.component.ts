import { Component } from '@angular/core';


@Component({
    selector: 'app-support-from-individuals',
    standalone: true,
    templateUrl: './support-from-individuals.component.html',
    styleUrl: './support-from-individuals.component.css',
    imports: []
})
export class SupportFromIndividualsComponent {
    title = "Tech for Impact: Join Global Movement";
    empower : {heading:string, content:string, img:string} = {
        heading : "Empower Lives and Ignite Change",
        content: "Your support can empower orphan and underprivileged communities by providing education, fostering women's empowerment, and promoting sustainable organic farming. Your donation in any kind is a powerful investment in building resilient, self-sufficient communities that thrive on knowledge, equality, and eco-friendly practices.",
        img: "assets/img/support/empower.png"
    };
    educate : {heading:string, content:string, img:string} = {
        heading : "Educate, Empower, Cultivate",
        content: "Be a force for positive change by supporting our mission to provide education to orphans, empower underprivileged communities, and promote sustainable organic farming. Your donation fuels a holistic approach to community development, creating a ripple effect of empowerment and environmental stewardship",
        img: "assets/img/support/educate.jpg"
    };
    equality : {heading:string, content:string, img:string} = {
        heading : "Education for All, Equality for Women, Earth-Friendly Farming",
        content: "Your donation has the power to break barriers, promote gender equality, and support sustainable farming practices. By contributing to education, women's empowerment, and organic farming, you are sowing the seeds of a more equitable, empowered, and environmentally conscious world.",
        img: "assets/img/support/equality.png"
    };

}
