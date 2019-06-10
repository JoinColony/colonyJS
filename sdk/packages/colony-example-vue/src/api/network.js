import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@/lib/purser'
import { getNetwork } from '@/lib/network-store'

export async function connect(network = 'local') {
  const wallet = await open()
  return getNetworkClient(network, wallet)
}

export async function getSkills({ network = getNetwork() }) {
  const { count: skillCount } = await network.getSkillCount.call()
  const skillIds = [...Array(skillCount).keys()].map(k => k + 1)
  const skills = await Promise.all(skillIds.map(skillId => (async () => {
    const skill = await network.getSkill.call({ skillId })
    return {
      id: skillId,
      ...skill,
    }
  })()))
  return skills.filter(skill => skill.isGlobalSkill)
}
