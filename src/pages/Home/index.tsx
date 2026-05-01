import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export function Home({ navigation }: any) {

  const renderBanner = () => (
    <ImageBackground
      source={require("../../assets/Utilitarios/fundo_banner3.png")}
      style={styles.bannerContainer}
      resizeMode="stretch"
    >
      <View style={styles.overlay} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.heroTextContainer}>
        <Text style={styles.heroSubtitle}>PRIMEIRA COMPRA</Text>
        <Text style={styles.heroTitle}>
          DESCONTO DE <Text style={styles.goldText}>20%</Text>
        </Text>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>+ FRETE GRÁTIS</Text>
        </View>
      </View>
    </ImageBackground>
  );


  const renderContent = () => (
    <View style={styles.contentWrapper}>


      {/* faixinha de promocao do frete */}
      <View style={styles.promoBanner}>
        <MaterialCommunityIcons name="truck" size={24} color="#fff" />
        <Text style={styles.promoText}>
          Frete grátis em compras acima de R$300 no app
        </Text>
      </View>


      {/* barra de categorias q rola pro lado */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        {[
          { name: "Relógios", img: require("../../assets/Utilitarios/banner relogio.png") },
          { name: "Anéis", img: require("../../assets/Utilitarios/banner anel.png") },
          { name: "Pulseiras", img: require("../../assets/Utilitarios/banner pulseira.png") },
          { name: "Colares", img: require("../../assets/Utilitarios/banner colar.png") },
          { name: "Brincos", img: require("../../assets/Utilitarios/banner brinco.png") },
        ].map((item, index) => (
          <View key={index} style={styles.categoryCard}>
            <Image source={item.img} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      
      <View style={styles.destaqueSection}>
        <Text style={styles.destaqueTitulo}>DESTAQUES</Text>
        <View style={styles.destaqueLine} />
      </View>

      <View style={styles.productsGrid}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Anel Masculino Linha Silver",
              price: "R$ 199,99",
              image: require("../../assets/Utilitarios/banner anel.png"),
              category: "Anéis",
              description: "Anel Masculino Linha Silver em Aço Inoxidável.\nAltura: 6,00(mm)",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner anel.png")} style={styles.productImage} />
          <Text style={styles.productName}>Anel Masculino Linha Silver</Text>
          <Text style={styles.productPrice}>R$ 199,99</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Pulseira Clássica Gold",
              price: "R$ 179,99",
              image: require("../../assets/Utilitarios/banner pulseira.png"),
              category: "Pulseiras",
              description: "Pulseira Clássica Gold Banhada a Ouro 18k.\nComprimento: 19cm",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner pulseira.png")} style={styles.productImage} />
          <Text style={styles.productName}>Pulseira Clássica Gold</Text>
          <Text style={styles.productPrice}>R$ 179,99</Text>
        </TouchableOpacity>
      </View>

      {/* produtos pra homem (relogios e correntes) */}
      <View style={styles.destaqueSection}>
        <Text style={styles.destaqueTitulo}>MASCULINO</Text>
        <View style={styles.destaqueLine} />
      </View>

      <View style={styles.productsGrid}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Relógio Classic Black",
              price: "R$ 349,90",
              image: require("../../assets/Utilitarios/banner relogio.png"),
              category: "Relógios",
              description: "Relógio Analógico Masculino Premium.\nResistente à água 5ATM.",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner relogio.png")} style={styles.productImage} />
          <Text style={styles.productName}>Relógio Classic Black</Text>
          <Text style={styles.productPrice}>R$ 349,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Corrente Aço Inoxidável",
              price: "R$ 129,90",
              image: require("../../assets/Utilitarios/banner colar.png"),
              category: "Colares",
              description: "Corrente Masculina em Aço Inoxidável 316L.\nComprimento: 60cm.",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner colar.png")} style={styles.productImage} />
          <Text style={styles.productName}>Corrente Aço Inoxidável</Text>
          <Text style={styles.productPrice}>R$ 129,90</Text>
        </TouchableOpacity>
      </View>

      {/* produtos pra mulher (brincos e aneis) */}
      <View style={styles.destaqueSection}>
        <Text style={styles.destaqueTitulo}>FEMININO</Text>
        <View style={styles.destaqueLine} />
      </View>

      <View style={styles.productsGrid}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Brinco Argola Ouro 18k",
              price: "R$ 259,90",
              image: require("../../assets/Utilitarios/banner brinco.png"),
              category: "Brincos",
              description: "Brinco Feminino estilo Argola com banho de Ouro 18k.",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner brinco.png")} style={styles.productImage} />
          <Text style={styles.productName}>Brinco Argola Ouro 18k</Text>
          <Text style={styles.productPrice}>R$ 259,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("Produto", {
            product: {
              name: "Anel Solitário Prata 925",
              price: "R$ 149,90",
              image: require("../../assets/Utilitarios/banner anel.png"),
              category: "Anéis",
              description: "Anel Solitário Feminino em Prata 925 com zircônia central.",
            }
          })}
        >
          <Image source={require("../../assets/Utilitarios/banner anel.png")} style={styles.productImage} />
          <Text style={styles.productName}>Anel Solitário Prata 925</Text>
          <Text style={styles.productPrice}>R$ 149,90</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.footer}>
        <Text style={styles.footerText}>test</Text>
        <Text style={styles.footerSubText}>test</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <FlatList
        data={[{ id: "banner" }, { id: "content" }]}
        renderItem={({ item }) => (item.id === "banner" ? renderBanner() : renderContent())}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentWrapper: {
    width: width,
    backgroundColor: "#fff",
  },


  bannerContainer: {
    width: width,
    height: height,
    justifyContent: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  heroTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30%",
  },
  heroSubtitle: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 4,
    fontWeight: "300",
    marginBottom: 8,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
  },
  goldText: {
    color: "#d4af37",
    fontSize: 48,
  },
  heroBadge: {
    backgroundColor: "#d4af37",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 20,
  },
  heroBadgeText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },


  promoBanner: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  promoText: {
    color: "#fff",
    fontSize: 13,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 20,
    color: "#000",
  },


  categoriesScroll: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f0f0f0",
  },
  categoryName: {
    fontSize: 12,
    color: "#333",
    marginTop: 5,
  },


  destaqueSection: {
    paddingVertical: 20,
    alignItems: "center",
  },
  destaqueTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  destaqueLine: {
    width: 40,
    height: 3,
    backgroundColor: "#d4af37",
    marginTop: 5,
  },
  productsGrid: {
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  productCard: {
    width: (width - 40) / 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  productImage: {
    width: "100%",
    height: 160,
    borderRadius: 4,
  },
  productName: {
    fontSize: 13,
    color: "#444",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },

  // rodapezinho padrao da pagina
  footer: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
  footerText: {
    fontWeight: "bold",
    color: "#333",
  },
  footerSubText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});