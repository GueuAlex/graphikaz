import moment from "moment";
import "moment/locale/fr";
import { chats } from "@/constants";
import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chatbubbleOutline, add, trash, documentOutline } from "ionicons/icons";
import Image from "next/image";

import { useState } from "react";
import { ChatMessageProps, ChatProps } from "@/types";
import { message } from "@/constants/data";
import { EmptyChat1, EmptyChat2 } from "@/public";

const ChatBox = () => {
  const session_user_id = 2;
  const [selectedChat, setSelectedChat] = useState<ChatProps | null>(
    chats.length > 0 ? chats[0] : null
  );
  //var chatts: ChatProps[] = chats;
  //chatts = [];
  const handleSlectedChatChange = (chat: ChatProps) => {
    setSelectedChat(chat);
  };

  // Supposez que votre API renvoie les messages triés par date et heure
  useEffect(() => {
    // Fonction de tri des messages par date et heure
    const sortMessages = (a: ChatMessageProps, b: ChatMessageProps) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };

    if (selectedChat) {
      // Triez les messages par date et heure
      const sortedMessages = selectedChat.messages.sort(sortMessages);
      setSelectedChat({ ...selectedChat, messages: sortedMessages });
    }
  }, [selectedChat]);

  // Fonction utilitaire pour formater la date
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("fr-FR", options).format(new Date(date));
  };

  // Fonction pour formater le moment d'une date
  function formatChatMoment(date: Date) {
    moment.locale("fr");
    // Vérifier si la date est valide
    if (!moment(date).isValid()) {
      return "Date invalide";
    }

    // Obtenir la date actuelle
    const now = moment();

    // Différence entre la date fournie et la date actuelle
    const diffInMinutes = now.diff(date, "minutes");

    // Conditions pour le format du moment
    if (diffInMinutes < 1) {
      return "À l'instant";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min`;
    } else if (diffInMinutes < 120) {
      const [hours, minutes] = moment(date).format("HH:mm").split(":");
      return `${hours}h${minutes}`;
    } else if (diffInMinutes < 1440) {
      return `Hier ${moment(date).format("HH:mm")}`;
    } else if (diffInMinutes < 10080) {
      return `${moment(date).format("dddd HH:mm")}`;
    } else {
      return `${moment(date).format("D MMM HH:mm")}`;
    }
  }

  return (
    <div className="dashboard-child">
      <div className="favorites-ui w-full">
        <h1>Messages</h1>
        <div className="favories-container ">
          <div className="favories-head flex gap-2">
            <div className="flex items-center gap-2">
              <div className="trash-container">
                {/*  <ChatbubbleOutline
                  color={"#6e0505"}
                  width="18px"
                  height="18px"
                /> */}
                <IonIcon
                  icon={chatbubbleOutline}
                  size="18px"
                  color="#6e0505"
                ></IonIcon>
              </div>
              <span className=" text-slate-600 font-light">
                Intéragir avec pour un administration
              </span>
            </div>
          </div>
          {chats.length > 0 ? (
            <div className="favories-body chat-box ">
              <div className="chat-liste">
                <div className="chat-liste-header border-b px-3">
                  <h3>Conversations</h3>
                  <div className="tooltip" data-tip="Créer nouveau chat ">
                    <button className="add-chat bg-green-500">
                      {" "}
                      {/* <Add color={"#fff"} width="15px" height="15px" /> */}
                      <IonIcon icon={add} size="15px" color="#fff"></IonIcon>
                    </button>
                  </div>
                </div>
                <div className="chat-liste-body">
                  <ul>
                    {chats.map((chat, index) => {
                      /* recuperer le dernier message ici */
                      /* recuperer l'heure et minute (ex: 12:00) du dernier message si date = date actuelle sinon recuperer le jour et le mois de la date ex: 17/01 */
                      // Récupérer le dernier message s'il y en a
                      let displayTime;
                      let lastMessageText;
                      const lastMessage =
                        chat.messages.length > 0
                          ? chat.messages[chat.messages.length - 1]
                          : null;

                      // Vérifier si un dernier message existe
                      if (lastMessage) {
                        lastMessageText = lastMessage.message_text;
                        // Récupérer l'heure et la minute du dernier message si la date est la date actuelle,
                        // sinon récupérer le jour et le mois de la date
                        const messageDate = new Date(lastMessage.date);
                        const currentDate = new Date();

                        if (
                          messageDate.getDate() === currentDate.getDate() &&
                          messageDate.getMonth() === currentDate.getMonth() &&
                          messageDate.getFullYear() ===
                            currentDate.getFullYear()
                        ) {
                          // C'est la date actuelle, afficher l'heure et la minute
                          displayTime = `${messageDate.getHours()}:0${messageDate.getMinutes()}`;
                        } else {
                          // Ce n'est pas la date actuelle, afficher le jour et le mois
                          displayTime = `${messageDate.getDate()}/0${
                            messageDate.getMonth() + 1
                          }`;
                        }
                      }
                      return (
                        <li
                          className={`${
                            selectedChat?.id === chat.id ? "active" : ""
                          }`}
                          onClick={() => handleSlectedChatChange(chat)}
                        >
                          <div className="chat-li flex items-center gap-2">
                            <div className="avatar placeholder">
                              <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">UI</span>
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="service-tilte-time">
                                <p className="service-tilte-p">
                                  {chat.concerned_order.service_name}
                                </p>
                                <div className="date-delete flex justify-center items-center w-full h-full  px-1">
                                  <small className="dtae-time">
                                    {displayTime}
                                  </small>
                                  <div
                                    className="tooltip"
                                    data-tip="Supprimer ?"
                                  >
                                    {/*   <Trash
                                      cssClasses="chat-deletor"
                                      width="14px"
                                      height="14px"
                                      color="red"
                                    /> */}
                                    <IonIcon
                                      icon={trash}
                                      size="14px"
                                      color="red"
                                      className="chat-deletor"
                                    ></IonIcon>
                                  </div>
                                </div>
                              </div>
                              <small className="last-msg-text">
                                {lastMessageText}
                              </small>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="selected-chat w-full  ">
                <div className="seleted-chat-header border-b flex items-center justify-between px-4 ">
                  <div className="flex items-center gap-2 ">
                    <h3 className="pt-4 pb-2">
                      {selectedChat?.concerned_order.service_name}
                    </h3>
                    <div className="litlle-menu flex items-center gap-3 h-full ">
                      <div className="little-item seleted-mini-menu pt-4 pb-2 px-1 flex items-center">
                        Conversation
                      </div>
                      <div className="little-item pt-4 pb-2 px-1 flex items-center">
                        Fichiers
                      </div>
                    </div>
                  </div>
                  <div
                    className="tooltip"
                    data-tip="Supprimer cette conversation"
                  >
                    <button className="add-chat bg-red-700">
                      {" "}
                      {/* <Trash color={"#fff"} width="15px" height="15px" /> */}
                      <IonIcon icon={trash} size="15px" color="#fff"></IonIcon>
                    </button>
                  </div>
                </div>
                <div className="selected-chat-body   relative">
                  <div className="chat-thumble-contaier flex h-full w-full">
                    <div className="chat-thumble">
                      {selectedChat?.messages.length! <= 0 ? (
                        <div className="empty-chat-container flex flex-col justify-center items-center w-full h-full">
                          <Image
                            src={EmptyChat2}
                            alt=""
                            width={150}
                            height={150}
                          />
                          <h3 className=" text-center">
                            Aucun message pour le moment
                          </h3>
                          <p className=" text-center">
                            Il semble que vous n'ayez pas entamé de conversation{" "}
                            <br />
                            avec l'un de nos professionnels.
                          </p>
                        </div>
                      ) : (
                        <div>
                          {selectedChat?.messages.map((message) => {
                            const isCurrentUser =
                              message.sender.id === session_user_id;

                            return (
                              <div
                                className={`message-container flex w-full ${
                                  isCurrentUser
                                    ? "justify-end"
                                    : "justify-start"
                                }`}
                              >
                                <div className=" max-w-[70%] py-6">
                                  <div
                                    className={`date-time-container flex  w-full ${
                                      isCurrentUser
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                                  >
                                    <small className="moment-style">
                                      {formatChatMoment(message.date)}
                                    </small>
                                  </div>
                                  <div
                                    key={message.id}
                                    className={`  rounded ${
                                      isCurrentUser
                                        ? "chat-bubble-primary current-user"
                                        : "chat-bubble-primary"
                                    }`}
                                  >
                                    {message.message_text}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="chat-inputs flex items-center justify-center h-full w-full">
                    <div className="input-sender w-full h-full">
                      <input
                        type="file"
                        name=""
                        id="input_file"
                        className="hidden"
                      />
                      <button className=" flex items-center justify-center btn1 ">
                        <label
                          htmlFor="input_file"
                          className="h-full w-full cursor-pointer flex items-center justify-center"
                        >
                          <IonIcon
                            icon={documentOutline}
                            size="25px"
                            color="#fff"
                          ></IonIcon>
                        </label>
                      </button>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Entrez un message ..."
                      />
                      <button className=" flex items-center justify-center btn2 ">
                        envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-chat-box">
              Aucune conversation pour le moment !
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
