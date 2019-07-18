import { getNetworkClient } from '@/stores/networkClient'

export async function getSkills({ networkClient = getNetworkClient() }) {
  const { count: skillCount } = await networkClient.getSkillCount.call()
  const skillIds = [...Array(skillCount).keys()].map(k => k + 1)
  const skills = await Promise.all(
    skillIds.map(
      skillId => (async () => {
        const skill = await networkClient.getSkill.call({ skillId })
        return {
          id: skillId,
          ...skill,
        }
      })()
    )
  )
  return skills.filter(skill => skill.isGlobalSkill)
}
