import React, { Component } from 'react';
import {Galleria} from 'primereact/galleria';

export default class GalleriaBasicDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 2
        };

        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.onItemChange = this.onItemChange.bind(this)

    }

    componentDidMount() {
        fetch('/images.json')
            .then( res => res.json() )
            .then( data => this.setState({images: data}) )
        ;
    }

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} />
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%' }} />
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <h3>Uncontrolled</h3>
                    
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} style={{ maxWidth: '520px' }} />
                 
                </div>
            </div>
        );
    }
}