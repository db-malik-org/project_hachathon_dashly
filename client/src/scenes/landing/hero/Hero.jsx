import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core'
import { IconBrandGithub, IconCheck } from '@tabler/icons-react'
import home from '../../../assets/landing/tax.jpg'
import { useHeroStyles } from './styles'
import { goToInstall, goToSources } from '../../../helpers/links'

const Hero = () => {
  const { classes } = useHeroStyles()
  return (
    <Container size="xl" className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Simplify Your <span className={classes.highlight}>Taxation</span>
          <br />
          Maximize Your <span className={classes.highlight}>Resources</span>
          <br />
          Dashly Tax Analysis Just for You!
        </Title>
        <Text color="dimmed" mt="md">
          Gérez votre patientèle, vos rendez-vous, vos consultations, vos factures et plus encore. Tout cela gratuitement, sans publicité et pour tout votre
          cabinet.
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={rem(12)} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>Confidentiel</b> – Stocké directement chez vous.
          </List.Item>
          <List.Item>
            <b>Gratuit et open-source</b> – Pas de licence, pas de publicité, pas de frais cachés.
          </List.Item>
          <List.Item>
            <b>Pour tout votre cabinet</b> – Disponible sur n'importe quel appareil.
          </List.Item>
          <List.Item>
            <b>Conçu pour les ostéopathes</b> – En collaboration avec des ostéopathes.
          </List.Item>
        </List>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control} onClick={() => goToInstall()}>
            Installer Maintenant
          </Button>
          <Button variant="default" radius="xl" size="md" className={classes.control} leftIcon={<IconBrandGithub />} onClick={() => goToSources()}>
            Code Source
          </Button>
        </Group>
      </div>

      <Image src={home} className={classes.image} />
    </Container>
  )
}

export default Hero
