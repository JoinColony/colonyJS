// getSkillTitle

export const getSkillTitle = (skillId) => {

  // check environment
  if (process.env.NODE_ENV === 'production') {

    // return undefined
    return 'undefined'

  } else {

    // return title
    switch (skillId) {
      case 3:
        return 'Agriculture'
      case 4:
        return 'Communication'
      case 5:
        return 'Construction'
      case 6:
        return 'Economics'
      case 7:
        return 'Engineering'
      case 8:
        return 'Healthcare'
      case 9:
        return 'Technology'
      case 10:
        return 'Transportation'
      default:
        break
    }

  }

}

// getSkill

export const getSkill = async (networkClient, skillId) => {

  // get skill
  const skill = await networkClient.getSkill.call({ skillId })

  // return skill
  return skill

}

// getSkills

export const getSkills = async (networkClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call()

  // set skill id
  let skillId = 1

  // set skills
  let skills = []

  // loop through skills
  while (skillId <= skillCount) {

    // get parent skill id and prevent throwing error with catch
    const { parentSkillId } = await networkClient.getParentSkillId.call({
      skillId,
      parentSkillIndex: 0,
    }).catch(() => false)

    // check if global skill
    if (parentSkillId && parentSkillId === 1) {

      // get skill
      let skill = await getSkill(networkClient, skillId)

      // append skill id
      skill.id = skillId

      // add skill to skills
      skills.push(skill)

    }

    // increment id
    skillId++

  }

  // return skills
  return skills

}
