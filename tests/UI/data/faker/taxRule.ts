// Import data
import {countries} from '@data/demo/countries';
import {tax} from '@data/demo/tax';
import {behaviour} from '@data/demo/taxRule';
import TaxRuleCreator from '@data/types/taxRule';

import {faker} from '@faker-js/faker';

const countriesNames: string[] = Object.values(countries).map((country) => country.name);

/**
 * Create new tax rule to use on tax rule form on BO
 * @class
 */
export default class TaxRuleData {
  public readonly id: number;

  public readonly country: string;

  public readonly zipCode: string;

  public readonly behaviour: string;

  public readonly name: string;

  public readonly description: string;

  /**
   * Constructor for class TaxRuleData
   * @param taxRulesToCreate {TaxRuleCreator} Could be used to force the value of some members
   */
  constructor(taxRulesToCreate: TaxRuleCreator = {}) {
    /** @type {number} ID */
    this.id = taxRulesToCreate.id || 0;

    /** @type {string} Country to apply the tax */
    this.country = taxRulesToCreate.country || faker.helpers.arrayElement(countriesNames);

    /** @type {string} Postal code of the country */
    this.zipCode = taxRulesToCreate.zipCode || faker.address.zipCode();

    /** @type {string} Behavior of the tax rule */
    this.behaviour = taxRulesToCreate.behaviour || faker.helpers.arrayElement(behaviour);

    /** @type {string} Name of the tax to use on the rule */
    this.name = taxRulesToCreate.name || tax.DefaultFrTax.name;

    /** @type {string} Description of the tax rule */
    this.description = taxRulesToCreate.description || faker.lorem.sentence();
  }
}
