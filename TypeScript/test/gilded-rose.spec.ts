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

        it('when Quality is 0 should not reduce Quality', () => {
            gildedRose.items[0].quality = 0;
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(0);
        });
    });

    describe('with multiple normal items', () => {
        var gildedRose: GildedRose;
        
        beforeEach(() => {
            gildedRose = new GildedRose([
                new Item('parsley', 5, 10),
                new Item('sage', 6, 13),
                new Item('rosemary', 4, 8),
                new Item('thyme', 1, 3)
            ]);
        });
        
        it('should degrade all SellIn values on update', () => {
            const actualUpdatedItems = gildedRose.updateQuality();
            expect(actualUpdatedItems[0].sellIn).to.equal(4);
            expect(actualUpdatedItems[1].sellIn).to.equal(5);
            expect(actualUpdatedItems[2].sellIn).to.equal(3);
            expect(actualUpdatedItems[3].sellIn).to.equal(0);
        });

        it('should degrade all Quality values on update', () => {
            const actualUpdatedItems = gildedRose.updateQuality();
            expect(actualUpdatedItems[0].quality).to.equal(9);
            expect(actualUpdatedItems[1].quality).to.equal(12);
            expect(actualUpdatedItems[2].quality).to.equal(7);
            expect(actualUpdatedItems[3].quality).to.equal(2);
        });        
    });


    describe('with one Aged Brie', () => {
        var gildedRose: GildedRose;

        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
        });

        it('should increase Quality from 10 to 11 on update', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(11);
        })

        it('when Quality is 50 should not increase Quality', () => {
            gildedRose.items[0].quality = 50;
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(50);
        });
    });

    describe('with one Sulfuras', () => {
        var gildedRose: GildedRose;

        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 20, 30)]);
        });

        it('should not decrease Quality on update', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(30);
        });

        it('should not decrease SellIn on update', () => {
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.sellIn).to.equal(20);
        });
    });

    describe('with one Backstage Pass', () => {
        var gildedRose: GildedRose;

        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 17, 11)]);
        });

        it('when SellIn is less than 5 should increase Quality from 11 to 14 on update', () => {
            gildedRose.items[0].sellIn = 2
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(14);
        });

        it('when SellIn is 5 should increase Quality from 11 to 14 on update', () => {
            gildedRose.items[0].sellIn = 5
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(14);
        });

        it('when SellIn is less than 10 should increase Quality from 11 to 13 on update', () => {
            gildedRose.items[0].sellIn = 7
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(13);
        });

        it('when SellIn is 10 should increase Quality from 11 to 13 on update', () => {
            gildedRose.items[0].sellIn = 10
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(13);
        });

        it('when SellIn is 0 should have Quality of zero', () => {
            gildedRose.items[0].sellIn = 0
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(0);
        });
    });
});
