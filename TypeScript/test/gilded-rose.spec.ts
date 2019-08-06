import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {
    describe('with one normal item', () => {
        var gildedRose: GildedRose;
        
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('banana', 5, 10)]);
        });
        
        it('should add a banana', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.name).to.equal('banana');
        });
        
        it('should degrade SellIn from 5 to 4 on update', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.sellIn).to.equal(4);
        });
        
        it('should degrade Quality from 10 to 9 on update', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(9);
        });
        
        it('when SellIn < 0 should degrade Quality from 10 to 8 on update', () => {
            gildedRose.items[0].sellIn = -1;
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(8);
        });
    });
});
