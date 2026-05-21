import { Weapon } from '../js/weapons/Weapon.js';
import { Arm } from '../js/weapons/Arm.js';
import { Bow } from '../js/weapons/Bow.js';
import { Sword } from '../js/weapons/Sword.js';
import { Knife } from '../js/weapons/Knife.js';
import { Staff } from '../js/weapons/Staff.js';
import { LongBow } from '../js/weapons/LongBow.js';
import { Axe } from '../js/weapons/Axe.js';
import { StormStaff } from '../js/weapons/StormStaff.js';

describe('Weapon', () => {
  test('создаётся с правильными свойствами', () => {
    const weapon = new Weapon('Меч', 20, 100, 1);
    expect(weapon.name).toBe('Меч');
    expect(weapon.attack).toBe(20);
    expect(weapon.durability).toBe(100);
    expect(weapon.initDurability).toBe(100);
    expect(weapon.range).toBe(1);
  });

  describe('takeDamage', () => {
    test('уменьшает прочность', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(30);
      expect(weapon.durability).toBe(70);
    });

    test('прочность не падает ниже 0', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(200);
      expect(weapon.durability).toBe(0);
    });

    test('не уменьшает Infinity', () => {
      const arm = new Arm();
      arm.takeDamage(999);
      expect(arm.durability).toBe(Infinity);
    });
  });

  describe('getDamage', () => {
    test('возвращает attack при прочности >= 30%', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      expect(weapon.getDamage()).toBe(20);
    });

    test('возвращает attack/2 при прочности < 30%', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(75);
      expect(weapon.getDamage()).toBe(10);
    });

    test('возвращает 0 при прочности = 0', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(100);
      expect(weapon.getDamage()).toBe(0);
    });
  });

  describe('isBroken', () => {
    test('возвращает false если не сломано', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      expect(weapon.isBroken()).toBe(false);
    });

    test('возвращает true если durability = 0', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(100);
      expect(weapon.isBroken()).toBe(true);
    });
  });
});

describe('Arm', () => {
  test('создаётся с правильными свойствами', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Рука');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test('никогда не ломается', () => {
    const arm = new Arm();
    arm.takeDamage(99999);
    expect(arm.isBroken()).toBe(false);
  });
});

describe('Bow', () => {
  test('создаётся с правильными свойствами', () => {
    const bow = new Bow();
    expect(bow.name).toBe('Лук');
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.range).toBe(3);
  });
});

describe('Sword', () => {
  test('создаётся с правильными свойствами', () => {
    const sword = new Sword();
    expect(sword.name).toBe('Меч');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.range).toBe(1);
  });
});

describe('Knife', () => {
  test('создаётся с правильными свойствами', () => {
    const knife = new Knife();
    expect(knife.name).toBe('Нож');
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.range).toBe(1);
  });
});

describe('Staff', () => {
  test('создаётся с правильными свойствами', () => {
    const staff = new Staff();
    expect(staff.name).toBe('Посох');
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.range).toBe(2);
  });
});

describe('LongBow', () => {
  test('создаётся с правильными свойствами', () => {
    const bow = new LongBow();
    expect(bow.name).toBe('Длинный лук');
    expect(bow.attack).toBe(15);
    expect(bow.range).toBe(4);
    expect(bow.durability).toBe(200);
  });
});

describe('Axe', () => {
  test('создаётся с правильными свойствами', () => {
    const axe = new Axe();
    expect(axe.name).toBe('Секира');
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.range).toBe(1);
  });
});

describe('StormStaff', () => {
  test('создаётся с правильными свойствами', () => {
    const staff = new StormStaff();
    expect(staff.name).toBe('Посох Бури');
    expect(staff.attack).toBe(10);
    expect(staff.range).toBe(3);
    expect(staff.durability).toBe(300);
  });
});
