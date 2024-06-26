'use client';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from '@mantine/core';
import ContactIconsList from './contactIcon';
import classes from './contact.module.css';
import bg from './bg.svg'; 

const Contact = () => {
  return (
    <Container my={20}>
      <Paper shadow="md" radius="lg" style={{ position: 'relative', zIndex: 1 }}>
          
        <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

        <ContactIconsList />

      </div>
          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="typescriptmasters.com" required />
              </SimpleGrid>
              <TextInput mt="md" label="Subject" placeholder="Subject" required />
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
        
          </form>
      </div>
      </Paper>
    </Container>
  );
};

export default Contact;
