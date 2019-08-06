import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {
    describe('happy path', () => {
        var gildedRose: GildedRose;
        
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('banana', 5, 10)]);
        });
        
        it('should add a banana', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.name).to.equal('banana');
        });
        
        it('should degrade SellIn from 5 to 4 after one day', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.sellIn).to.equal(4);
        });
        
        it('should degrade Quality from 10 to 9 after one day', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(9);
        });
    });

    describe('when sell-by date has passed', () => {
        var gildedRose: GildedRose;
        
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('cherry pie', -1, 12)]);
        });
        
        it('should degrade Quality from 12 to 10 after one day', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(10);
        });
    });
});
