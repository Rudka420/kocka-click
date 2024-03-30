import { defaultValues } from "./defaultValues.js";

function createUpgrades() {
    const upgradesContainer = document.getElementById('upgrades-container')
    const template = document.getElementById('upgrade-template').textContent

    defaultValues.forEach((obj) => {
        let html = template;

        Object.keys(obj).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g')
            html = html.replace(regex, obj[key])
        })

        upgradesContainer.innerHTML += html
    })
}

createUpgrades()

export const upgrades = [
    {
      name: 'Kámoš',
      cost:  document.querySelector('.Kámoš-cost'),
      parsedCost: parseFloat(document.querySelector('.Kámoš-cost').innerHTML),
      increase: document.querySelector('.Kámoš-increase'),
      parsedIncrease: parseFloat(document.querySelector('.Kámoš-increase').innerHTML),
      level: document.querySelector('.Kámoš-level'),
      gemMultiplier: 1.025,
      costMultiplier: 1.12
    },
    {
        name: 'Miska',
        cost:  document.querySelector('.Miska-cost'),
        parsedCost: parseFloat(document.querySelector('.Miska-cost').innerHTML),
        increase: document.querySelector('.Miska-increase'),
        parsedIncrease: parseFloat(document.querySelector('.Miska-increase').innerHTML),
        level: document.querySelector('.Miska-level'),
        gemMultiplier: 1.03,
        costMultiplier: 1.115
    },
    {
        name: 'Hračka',
        cost:  document.querySelector('.Hračka-cost'),
        parsedCost: parseFloat(document.querySelector('.Hračka-cost').innerHTML),
        increase: document.querySelector('.Hračka-increase'),
        parsedIncrease: parseFloat(document.querySelector('.Hračka-increase').innerHTML),
        level: document.querySelector('.Hračka-level'),
        gemMultiplier: 1.035,
        costMultiplier: 1.11
    },
    {
        name: 'Konzerva',
        cost:  document.querySelector('.Konzerva-cost'),
        parsedCost: parseFloat(document.querySelector('.Konzerva-cost').innerHTML),
        increase: document.querySelector('.Konzerva-increase'),
        parsedIncrease: parseFloat(document.querySelector('.Konzerva-increase').innerHTML),
        level: document.querySelector('.Konzerva-level'),
        gemMultiplier: 1.04,
        costMultiplier: 1.10
    },
    {
        name: 'Kuře',
        cost: document.querySelector(".Kuře-cost"),
        parsedCost: parseFloat(document.querySelector(".Kuře-cost").innerHTML),
        increase: document.querySelector(".Kuře-increase"),
        parsedIncrease: parseFloat(document.querySelector(".Kuře-increase").innerHTML),
        level: document.querySelector(".Kuře-level"),
        gemMultiplier: 1.045,
        costMultiplier: 1.096,
      }

]



    