import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    const gildedRose = new GildedRose([new Item('banana', 5, 10)]);
    
    it('should add a banana', () => {
        const actualUpdatedItem = gildedRose.updateQuality()[0];
        expect(actualUpdatedItem.name).to.equal('banana');
    });

    it('should degrade SellIn from 5 to 4 after one day', () =>{
        const actualUpdatedItem = gildedRose.updateQuality()[0];
        expect(actualUpdatedItem.sellIn).to.equal(4);
    });
});
