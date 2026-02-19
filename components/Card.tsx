import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.cardTitle}>{title}</Text>
      <Text style={cardStyles.cardText}>{content}</Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%', 
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8038cd',
    fontSize: 16,
  },
  cardText: {
    color: '#444',
  }
});

export { Card };

