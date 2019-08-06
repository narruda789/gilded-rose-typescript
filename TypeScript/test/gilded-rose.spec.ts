import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should add a banana', () => {
        const gildedRose = new GildedRose([ new Item('banana', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('banana');
    });

    it('should degrade SellIn after one day', () =>{
        const gildedRose = new GildedRose([ new Item('banana', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    });
});
